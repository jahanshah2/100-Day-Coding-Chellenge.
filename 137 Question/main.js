"use strict";
try {
    // Intentionally cause an error
    throw new Error("Something went wrong");
}
catch (error) {
    console.log("error.massage");
}
