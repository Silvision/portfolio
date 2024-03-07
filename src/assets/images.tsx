const importAll = (importedObject: Record<string, string>) => {
    const media: string[] = [];
    const values = Object.values(importedObject);
    for (const value of values) {
        media.push(value);
    }
    return media;
}

const ecosphereMediaImport = importAll(import.meta.glob('./Ecosphere/*.{png,mp4,gif}', {as: 'url', eager: true}));
const ecosphereMediaSwiperImport = importAll(import.meta.glob('./Ecosphere/swiperImages/*.{png,mp4}', {as: 'url', eager: true}));

const paintColorSwitchMediaImport = importAll(import.meta.glob('./PaintColorSwitch/*.{png,}', {as: 'url', eager: true}));
const paintColorSwitchMediaSwiperImport = importAll(import.meta.glob('./PaintColorSwitch/swiperImages/*.{png,}', {as: 'url', eager: true}));

const ultimuttDefendersMediaImport = importAll(import.meta.glob('./UltimuttDefenders/*.{png,}', {as: 'url', eager: true}));
const ultimuttDefendersMediaSwiperImport = importAll(import.meta.glob('./UltimuttDefenders/swiperImages/*.{png,}', {as: 'url', eager: true}));

export const projectsMedia: string[] = [ecosphereMediaImport[0], ecosphereMediaImport[1], paintColorSwitchMediaImport[0], ultimuttDefendersMediaImport[0]]

export const ecosphereMedia: string[] = ecosphereMediaImport
export const ecosphereMediaSwiper: string[] = ecosphereMediaSwiperImport

export const paintColorSwitchMedia: string[] = paintColorSwitchMediaImport
export const paintColorSwitchMediaSwiper: string[] = paintColorSwitchMediaSwiperImport

export const ultimuttDefendersMedia: string[] = ultimuttDefendersMediaImport
export const ultimuttDefendersMediaSwiper: string[] = ultimuttDefendersMediaSwiperImport