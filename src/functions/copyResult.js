export function copyResult(gridImage) {
    navigator.clipboard.writeText(gridImage.join(''));
    return false;
}