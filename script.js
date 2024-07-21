//ALL THE VARIABLES YOU WILL NEED
var userId,
  firstName1,
  lastName,
  email,
  attributeName,
  attributeValue,
  eventName,
  eventProperties
  

//THIS CODE SNIPPET (WHICH IS PRESENT WITH EVERY FUNCTION) ALLOWS FOR CLICKING 'ENTER' TO SUBMIT, NO NEED TO TOUCH IT
var userr = document.getElementById("change_user_text");
userr.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.getElementById("change_user_button").click();
  }
});

document
  .getElementById("change_user_button")
  .addEventListener("click", function () {
    userId = document.getElementById("change_user_text").value;

    analytics.identify(userId);
  });

var first = document.getElementById("fn_text");
first.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.getElementById("fn_button").click();
  }
});

//First Name
document.getElementById("fn_button").addEventListener("click", function () {
  first_name = document.getElementById("fn_text").value;

  analytics.identify(userId, {
    firstName: first_name,
  });
});

var last = document.getElementById("ln_text");
last.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.getElementById("ln_button").click();
  }
});

//Last Name
document.getElementById("ln_button").addEventListener("click", function () {
  last_name = document.getElementById("ln_text").value;

  analytics.identify(userId, {
    lastName: last_name,
  });
});

var mail = document.getElementById("email_text");
mail.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.getElementById("email_button").click();
  }
});

//Email Address
document.getElementById("email_button").addEventListener("click", function () {
  email_val = document.getElementById("email_text").value;

  analytics.identify(userId, {
    email: email_val,
  });
});

//CUSTOM ATTRIBUTES

document
  .getElementById("attribute_button")
  .addEventListener("click", function () {
    attributeName = document.getElementById("attribute_name").value;
    attributeValue = document.getElementById("attribute_value").value;

    analytics.identify(userId, {
      attributeName: attributeValue,
    });
  });

//CUSTOM EVENTS

document.getElementById("event_button").addEventListener("click", function () {
  eventName = document.getElementById("event_name").value;
  eventProperties = document.getElementById("properties").value;
  if (eventProperties === "") {
    analytics.track(eventName);
  } else {
    analytics.track(eventName, JSON.parse(eventProperties));
  }
});

// TRACK PURCHASE
document.getElementById("purchase_button").addEventListener("click", function () {
  const revenue = parseFloat(document.getElementById("revenue").value);
  const currency = document.getElementById("currency").value;
  const products = document.getElementById("products").value;

  console.log("Tracking purchase:", revenue, currency);

  // Check if all fields are filled
  if (!revenue || !currency) {
    alert("Please fill in all fields.");
    return;
  }

  if (window.analytics) {
    let parsedProducts;
    try {
      parsedProducts = JSON.parse(products);
    } catch (e) {
      console.error("Invalid JSON input for products:", e);
      alert("Please enter valid JSON for products.");
      return;
    }

    analytics.track("Order Completed", {
      
      revenue: parseFloat(revenue),
      currency: currency,
      products: parsedProducts
    });

    console.log("Order Completed event tracked successfully.");
  } else {
    console.error("Segment analytics is not loaded.");
  }
});


function user() {
  var x = document.getElementById("user");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function customA() {
  var x = document.getElementById("customA");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function customE() {
  var x = document.getElementById("customE");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function purchases() {
  var x = document.getElementById("purchases");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
