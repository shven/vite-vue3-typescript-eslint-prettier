import { readdirSync, writeFileSync } from 'fs';

const greenColor = '\x1B[32m';
const resetColor = '\x1B[0m';
const inputPath = './src/assets/icons';
const fileName = 'Icon.constants.generated.ts';
const outputPath = `./src/components/Icon/${fileName}`;
const separator = ',\n    ';

try {
    const files = readdirSync(inputPath).filter((file) => file.endsWith('.svg'));

    if (files.length === 0) {
        throw new Error(`No SVG files found in ${inputPath}`);
    }

    const typeDefinition = `// this file is generated, when adding new icons, run the icons script from package.json
export const iconNames = [\n    ${files
        .map((file) => `'${file.replace(/\.svg$/i, '').replace(/[^a-z0-9-]/g, '')}'`)
        .join(separator)}\n] as const satisfies readonly string[];\n`;

    writeFileSync(outputPath, typeDefinition, 'utf8');

    // eslint-disable-next-line no-console
    console.log(`${greenColor}✔${resetColor} ${fileName} generated`);
} catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error generating ${fileName}: ${error.message}`);
}
