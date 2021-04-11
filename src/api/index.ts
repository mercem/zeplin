import { ImageData } from '../types';

const token = '182080-ca882d28-66a4-4510-bc7e-b901e9590ec7';

export const fetchImage = (id: string, scale: number = 1): Promise<ImageData> => new Promise((res) => {
  fetch(`https://api.figma.com/v1/images/dLiq9t1A9DzAzPTtmQTlKG?ids=${id}&scale=${scale}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-Figma-Token': token
    }
  })
    .then((res) => res.json())
    .then(d => res(d));
})

export const fetchFrame = (): Promise<any>=> new Promise((res) => {
  fetch(`https://api.figma.com/v1/files/dLiq9t1A9DzAzPTtmQTlKG`, {
        headers: {
          'Content-Type': 'application/json',
          'X-Figma-Token': token
        }
      })
    .then((res) => res.json())
    .then(d => res(d))
})