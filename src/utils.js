export const getPathWithParam = (path, param) => {
    var lastOcurrenceOfSlash = path.lastIndexOf("/");
    return path.substring(0,lastOcurrenceOfSlash + 1) + param;
}