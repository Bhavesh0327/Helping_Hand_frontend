export const combineClasses = function() {
    let classes = ``;
    for (let arg of arguments) classes += `${arg} `;
    return classes;
}