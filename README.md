## Zeplin Code Challenge
### `npm install` 

Install required packages
### `npm start` 

Run application


## Approach

To create layers, I created Frame component which recursively creates child layers e.g. Frame, Text, Vector.

To position and scale layers, I created function named Normalizer. This function removes initial offsets from vertical and horizontal positions. On window re-size and showing layer detail, positions are calculated again.

