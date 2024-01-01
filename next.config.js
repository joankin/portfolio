/** @type {import('next'.NextConfig)} */
const withMDX = require('@next/mdx')();

module.exports = withMDX({
  distDir: 'build',
  images: { unoptimized: true },
  // Your other Next.js configurations go here
});
