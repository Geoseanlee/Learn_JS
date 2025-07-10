// 简单的测试框架实现
export function describe(name, fn) {
    console.log(`\n${name}:`);
    fn();
}

export function it(name, fn) {
    try {
        fn();
        console.log(`  ✓ ${name}`);
    } catch (error) {
        console.log(`  ✗ ${name}: ${error.message}`);
        process.exitCode = 1;
    }
}

export const assert = {
    strictEqual(actual, expected, message) {
        if (actual !== expected) {
            throw new Error(message || `Expected ${expected}, got ${actual}`);
        }
    }
};

export const withSubmit = false; // 设置为 true 可以运行提交用例
