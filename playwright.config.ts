import { defineConfig } from '@playwright/test';
export default defineConfig({
    // Test file patterns (glob patterns) to discover test files.
  testDir: './IntegrationTests',
  //testMatch: 'IntegrationTests/tests/apiTest.spec.ts', // Discover files ending with .spec.ts
  
});