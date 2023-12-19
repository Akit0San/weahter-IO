/**
 * @license MIT
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

const api_key = "b6c3dfec0d0c35638794a33149e183c7";

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback function
 */

export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};
