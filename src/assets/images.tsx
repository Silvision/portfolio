const importAll = (importedObject: Record<string, string>) => {
    const media: string[] = [];
    const values = Object.values(importedObject);
    for (const value of values) {
        media.push(value);
    }
    return media;
}

const profileMediaImport = importAll(import.meta.glob('./*.{png,mp4,gif}', {as: 'url', eager: true}));

const ecosphereMediaImport = importAll(import.meta.glob('./Ecosphere/*.{png,mp4,gif}', {as: 'url', eager: true}));
const ecosphereMediaSwiperImport = importAll(import.meta.glob('./Ecosphere/swiperImages/*.{png,mp4}', {as: 'url', eager: true}));

const paintColorSwitchMediaImport = importAll(import.meta.glob('./PaintColorSwitch/*.{png,}', {as: 'url', eager: true}));
const paintColorSwitchMediaSwiperImport = importAll(import.meta.glob('./PaintColorSwitch/swiperImages/*.{png,}', {as: 'url', eager: true}));

const ultimuttDefendersMediaImport = importAll(import.meta.glob('./UltimuttDefenders/*.{png,}', {as: 'url', eager: true}));
const ultimuttDefendersMediaSwiperImport = importAll(import.meta.glob('./UltimuttDefenders/swiperImages/*.{png,}', {as: 'url', eager: true}));

const reverseSokobanMediaImport = importAll(import.meta.glob('./ReverseSokoban/*.{png,}', {as: 'url', eager: true}));
const reverseSokobanMediaSwiperImport = importAll(import.meta.glob('./ReverseSokoban/swiperImages/*.{png,}', {as: 'url', eager: true}));

const eternalReturnMediaImport = importAll(import.meta.glob('./EternalReturn/*.{png,}', {as: 'url', eager: true}));
const eternalReturnMediaSwiperImport = importAll(import.meta.glob('./EternalReturn/swiperImages/*.{png,gif}', {as: 'url', eager: true}));


const shellProgramMediaImport = importAll(import.meta.glob('./ShellProgram/*.{png,}', {as: 'url', eager: true}));
const shellProgramMediaSwiperImport = importAll(import.meta.glob('./ShellProgram/swiperImages/*.{png,gif}', {as: 'url', eager: true}));

const simpleFlixsterMediaImport = importAll(import.meta.glob('./SimpleFlixster/*.{png,}', {as: 'url', eager: true}));
const simpleFlixsterMediaSwiperImport = importAll(import.meta.glob('./SimpleFlixster/swiperImages/*.{png,gif}', {as: 'url', eager: true}));

const simpleTwitterMediaImport = importAll(import.meta.glob('./SimpleTwitter/*.{png,}', {as: 'url', eager: true}));
const simpleTwitterMediaSwiperImport = importAll(import.meta.glob('./SimpleTwitter/swiperImages/*.{png,gif}', {as: 'url', eager: true}));

const simpleInstagramMediaImport = importAll(import.meta.glob('./SimpleInstagram/*.{png,}', {as: 'url', eager: true}));
const simpleInstagramMediaSwiperImport = importAll(import.meta.glob('./SimpleInstagram/swiperImages/*.{png,gif}', {as: 'url', eager: true}));

export const profileMedia: string[] = profileMediaImport

export const projectsMedia: string[] = [
    ecosphereMediaImport[0], 
    ecosphereMediaImport[1], 
    paintColorSwitchMediaImport[0], 
    ultimuttDefendersMediaImport[0], 
    reverseSokobanMediaImport[0], 
    eternalReturnMediaImport[0],
    shellProgramMediaImport[0],
    simpleFlixsterMediaImport[0],
    simpleTwitterMediaImport[0],
    simpleInstagramMediaImport[0],
]

export const ecosphereMedia: string[] = ecosphereMediaImport
export const ecosphereMediaSwiper: string[] = ecosphereMediaSwiperImport

export const paintColorSwitchMedia: string[] = paintColorSwitchMediaImport
export const paintColorSwitchMediaSwiper: string[] = paintColorSwitchMediaSwiperImport

export const ultimuttDefendersMedia: string[] = ultimuttDefendersMediaImport
export const ultimuttDefendersMediaSwiper: string[] = ultimuttDefendersMediaSwiperImport

export const reverseSokobanMedia: string[] = reverseSokobanMediaImport
export const reverseSokobanMediaSwiper: string[] = reverseSokobanMediaSwiperImport

export const eternalReturnMedia: string[] = eternalReturnMediaImport
export const eternalReturnMediaSwiper: string[] = eternalReturnMediaSwiperImport


export const shellProgramMedia: string[] = shellProgramMediaImport
export const shellProgramMediaSwiper: string[] = shellProgramMediaSwiperImport

export const simpleFlixsterMedia: string[] = simpleFlixsterMediaImport
export const simpleFlixsterMediaSwiper: string[] = simpleFlixsterMediaSwiperImport

export const simpleTwitterMedia: string[] = simpleTwitterMediaImport
export const simpleTwitterMediaSwiper: string[] = simpleTwitterMediaSwiperImport

export const simpleInstagramMedia: string[] = simpleInstagramMediaImport
export const simpleInstagramMediaSwiper: string[] = simpleInstagramMediaSwiperImport