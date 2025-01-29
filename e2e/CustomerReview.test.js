Feature('Customer Review on Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Adding a review to a restaurant', async ({ I }) => {

  I.seeElement('.card');
  const firstRestaurantLink = locate('.cta-link').first();
  I.click(firstRestaurantLink);

  I.seeElement('.review-form-container');

  const reviewText = 'Holaaa. this is test E2E!';
  const reviewerName = 'ch1bsyy';
  
  I.fillField('#review-name', reviewerName);
  I.fillField('#review-content', reviewText);

   I.click('.review-submit-button');

  I.waitForElement('.swal2-title', 5);
  I.see('Review Submitted', '.swal2-title');
});

Scenario('Review is displayed after refresh', async ({ I }) => {

  I.amOnPage('/');
  const firstRestaurantLink = locate('.cta-link').first();
  I.click(firstRestaurantLink);

  I.seeElement('.review-card');
  I.see('ch1bsyy', '.reviewer');
  I.see('Holaaa. this is test E2E', '.reviewer-comment');
});
