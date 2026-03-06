const trackEvent = userId => eventType => eventData => {
  console.log(`User: ${userId}, Event: ${eventType}, Data:`, eventData);
};
// Step 1: fix the user
const trackForUser123 = trackEvent("user123");

// Step 2: fix the event type
const trackClickEvent = trackForUser123("click");

// Step 3: send event-specific data
trackClickEvent({ button: "signup", page: "home" });
trackClickEvent({ button: "login", page: "login" });