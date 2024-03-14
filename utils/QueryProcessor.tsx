export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew")) {
    return ("emsong");
  }

  if (query.toLowerCase().includes("name")) {
    return ("Emily Song");
  }

  if (query.toLowerCase().includes("plus")) {
    var regex = /\d+/g;
    var matches = query.match(regex)?.map((elem) => +elem);
    if (matches != null) {
      return matches.reduce((sum, current) => sum + current, 0).toString();
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    var regex = /\d+/g;
    var matches = query.match(regex)?.map((elem) => +elem);
    if (matches != null) {
      return matches.reduce((sum, current) => sum * current, 1).toString();
    }
  }


  if (query.toLowerCase().includes("largest")) {
    var regex = /\d+/g;
    var matches = query.match(regex)?.map((elem) => +elem);
    if (matches != null) {
      return matches?.reduce((max, current) => Math.max(max, current)).toString();
    }
  }

  if (query.toLowerCase().includes("square")) {
    var regex = /\d+/g;
    var matches = query.match(regex)?.map((elem) => +elem);
    matches?.filter((elem) => Math.floor(Math.sqrt(elem)) * Math.floor(Math.sqrt(elem)) == elem);
    matches?.filter((elem) => Math.floor(Math.cbrt(elem)) * Math.floor(Math.cbrt(elem)) * Math.floor(Math.cbrt(elem)) == elem);
    if (matches != null) {
      return matches[0].toString();
    }
  }

  return "";
}
