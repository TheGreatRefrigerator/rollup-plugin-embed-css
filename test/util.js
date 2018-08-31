const {runInNewContext} = require('vm');
const console = require('console');

exports.runCode = (code, sandbox = {}) => {
    const blobs = [];
    const objectURLs = new Map();
    sandbox = {
        Blob: class Blob {
            constructor(data) {
                this.data = data;
                blobs.push(this);
            }
        },
        document: {
            createElement: (tag) => ({
                tag,
                attrs: {},
                setAttribute(key, value) {
                    this.attrs[key] = value;
                },
                getAttribute(key) {
                    return this.attrs[key];
                },
            }),
            head: {
                children: [],
                appendChild(child) {
                    this.children.push(child);
                    return child;
                },
            },
        },
        URL: {
            createObjectURL(blob) {
                const url = `_${objectURLs.size}`;
                objectURLs.set(url, blob);
                return url;
            },
            revokeObjectURL(url) {
                const blob = objectURLs.get(url);
                if (blob) {
                    blob.revoked = true;
                }
            },
        },
        console,
        ...sandbox,
    };
    sandbox.global = sandbox;
    runInNewContext(code, sandbox);
    return {blobs, objectURLs, ...sandbox};
};