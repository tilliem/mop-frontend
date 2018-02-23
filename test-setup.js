import requireHacker from 'require-hacker'

// Replace svgs with empty react components
requireHacker.hook('svg', () => 'module.exports = () => null')
