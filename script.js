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
  products = document.getElementById("products").value;

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
      
      products: parsedProducts
    });

    console.log("Order Completed event tracked successfully.");
  } else {
    console.error("Segment analytics is not loaded.");
  }
});

// Content Cards
    const toggle = document.getElementById("toggle");
    const hide = document.getElementById("hide");
    const show = document.getElementById("show");
    const feed = document.getElementById("feed");

    toggle.onclick = function() {
      braze.toggleContentCards(feed);
    }

    hide.onclick = function() {
      braze.hideContentCards();
    }

    show.onclick = function() {
      braze.showContentCards(feed);
    }


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

// Content Cards Analytics
  braze.subscribeToContentCardsUpdates((updates) => {
    const cards = updates.cards;
    feed.innerHTML = ''; // Clear the feed

    cards.forEach(card => {
      if (card.isControl) {
        // Do not display the control card, but remember to call `logContentCardImpressions([card])`
        braze.logContentCardImpressions([card]);
      } else if (card instanceof braze.ClassicCard || card instanceof braze.CaptionedImage) {
        // Create and display a card element
        const cardElement = document.createElement('div');
        cardElement.innerHTML = `
          <h2>${card.title}</h2>
          <img src="${card.imageUrl}" alt="${card.title}">
          <p>${card.description}</p>
        `;
        feed.appendChild(cardElement);
        // Log card impression
        braze.logContentCardImpressions([card]);
      } else if (card instanceof braze.ImageOnly) {
        // Create and display an image-only card element
        const cardElement = document.createElement('div');
        cardElement.innerHTML = `<img src="${card.imageUrl}" alt="Image Card">`;
        feed.appendChild(cardElement);
        // Log card impression
        braze.logContentCardImpressions([card]);
      }
    });
  });

  appboy.openSession();
