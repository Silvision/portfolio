const importAll = (importedObject: Record<string, string>) => {
    const media: string[] = [];
    const values = Object.values(importedObject);
    for (const value of values) {
        media.push(value);
    }
    return media;
}

const ecosphereMediaImport = importAll(import.meta.glob('./Ecosphere/*.{png,mp4}', {as: 'url', eager: true}));
const ecosphereMediaSwiperImport = importAll(import.meta.glob('./Ecosphere/swiperImages/*.{png,mp4}', {as: 'url', eager: true}));

export const projectsMedia: string[] = [ecosphereMediaImport[0], ecosphereMediaImport[1]]
export const ecosphereMedia: string[] = [ecosphereMediaImport[0]];
export const ecosphereMediaSwiper: string[] = ecosphereMediaSwiperImport
