// change pages and active menu
let setting = document.getElementById("setting");
const passwordSetting = document.getElementById("passwordSetting");
let transaction = document.getElementById("transaction");
let subscription = document.getElementById("subscription");
let subscriptionPackage = document.getElementById("subscriptionPackage");
let bookmark = document.getElementById("bookmark");
let btnSetting = document.getElementById("btnSetting");
let btnPasswordSetting = document.getElementById("btnPasswordSetting");
let btnTransaction = document.getElementById("btnTransaction");
let btnSubscription = document.getElementById("btnSubscription");
let btnBookmark = document.getElementById("btnBookmark");

function goSetting() {
  goReset();
  setting.style.display = "block";
  btnSetting.classList.add("link-menu-active");
  menuBreadCrumbs.style.display = "block";
  navBreadCrumbs.textContent = "Profile";
}

function goPasswordSetting() {
  goReset();
  passwordSetting.style.display = "block";
  btnPasswordSetting.classList.add("link-menu-active");
  menuBreadCrumbs.style.display = "block";
  navBreadCrumbs.textContent = "Password";
}

function goTransaction() {
  goReset();
  transaction.style.display = "block";
  btnTransaction.classList.add("link-menu-active");
  menuBreadCrumbs.style.display = "block";
  navBreadCrumbs.textContent = "Transactions";
}

function goSubscription() {
  goReset();
  subscription.style.display = "block";
  btnSubscription.classList.add("link-menu-active");
  menuBreadCrumbs.style.display = "block";
  navBreadCrumbs.textContent = "Subscription";
}

function goBuySubscription() {
  goReset();
  subscriptionPackage.style.display = "block";
}

function goBookmark() {
  goReset();
  bookmark.style.display = "block";
  btnBookmark.classList.add("link-menu-active");
  menuBreadCrumbs.style.display = "block";
  navBreadCrumbs.textContent = "Bookmarks";
}

function goReset() {
  transaction.style.display = "none";
  setting.style.display = "none";
  passwordSetting.style.display = "none";
  subscription.style.display = "none";
  subscriptionPackage.style.display = "none";
  bookmark.style.display = "none";
  btnSubscription.classList.remove("link-menu-active");
  btnBookmark.classList.remove("link-menu-active");
  btnSetting.classList.remove("link-menu-active");
  btnPasswordSetting.classList.remove("link-menu-active");
  btnTransaction.classList.remove("link-menu-active");
  menuProfile.classList.add("hidden");
}

//// mobile menu
const menuProfile = document.getElementById("menuProfile");
////// mobile breadcrumbs
const navBreadCrumbsMobile = document.getElementById("navBreadCrumbsMobile");

function showMenuProfileMobile() {
  menuProfile.classList.remove("hidden");
}
////// mobile breadcrumbs end
//// mobile menu

//// breadcrumbs
const menuBreadCrumbs = document.getElementById("menuBreadCrumbs");
const navBreadCrumbs = document.getElementById("navBreadCrumbs");

function removeMenuBreadCrumbs() {
  menuBreadCrumbs.style.display = "none";
  btnSubscription.classList.remove("link-menu-active");
  btnBookmark.classList.remove("link-menu-active");
  btnSetting.classList.remove("link-menu-active");
  btnPasswordSetting.classList.remove("link-menu-active");
  btnTransaction.classList.remove("link-menu-active");
  showMenuProfileMobile();
}
//// breadcrumbs
// change pages and active menu end

// profile setting menu
//// profile name
const displayName = document.getElementById("displayName");
const displayInputName = document.getElementById("displayInputName");
const btnShowInputName = document.getElementById("btnShowInputName");
const inputName = document.getElementById("inputName");

function showInputName() {
  displayName.style.display = "none";
  btnShowInputName.style.display = "none";
  displayInputName.style.display = "block";
  inputName.focus();
}

function hideInputName() {
  displayName.style.display = "block";
  btnShowInputName.style.display = "block";
  displayInputName.style.display = "none";
}
//// profile name end

//// profile date
const displayDate = document.getElementById("displayDate");
const displayInputDate = document.getElementById("displayInputDate");
const btnShowInputDate = document.getElementById("btnShowInputDate");
const inputDate = document.getElementById("inputDate");

function showInputDate() {
  displayDate.style.display = "none";
  btnShowInputDate.style.display = "none";
  displayInputDate.style.display = "block";
  inputDate.focus();
}

function hideInputDate() {
  displayDate.style.display = "block";
  btnShowInputDate.style.display = "block";
  displayInputDate.style.display = "none";
}
//// profile date end

//// profile phone number
const displayPhoneNumber = document.getElementById("displayPhoneNumber");
const displayInputPhoneNumber = document.getElementById(
  "displayInputPhoneNumber"
);
const btnShowInputPhoneNumber = document.getElementById(
  "btnShowInputPhoneNumber"
);
const inputPhoneNumber = document.getElementById("inputPhoneNumber");

function showInputPhoneNumber() {
  displayPhoneNumber.style.display = "none";
  btnShowInputPhoneNumber.style.display = "none";
  displayInputPhoneNumber.style.display = "block";
  inputPhoneNumber.focus();
}

function hideInputPhoneNumber() {
  displayPhoneNumber.style.display = "block";
  btnShowInputPhoneNumber.style.display = "block";
  displayInputPhoneNumber.style.display = "none";
}
//// profile phone number end

//// profile gender
const displayGender = document.getElementById("displayGender");
const displayInputGender = document.getElementById("displayInputGender");
const btnShowInputGender = document.getElementById("btnShowInputGender");
const inputGender = document.getElementById("inputGender");

function showInputGender() {
  displayGender.style.display = "none";
  btnShowInputGender.style.display = "none";
  displayInputGender.style.display = "block";
  inputGender.focus();
}

function hideInputGender() {
  displayGender.style.display = "block";
  btnShowInputGender.style.display = "block";
  displayInputGender.style.display = "none";
}
//// profile gender end

//// profile address
const displayAddress = document.getElementById("displayAddress");
const displayInputAddress = document.getElementById("displayInputAddress");
const btnShowInputAddress = document.getElementById("btnShowInputAddress");
const inputAddress = document.getElementById("inputAddress");

function showInputAddress() {
  displayAddress.style.display = "none";
  btnShowInputAddress.style.display = "none";
  displayInputAddress.style.display = "block";
  inputAddress.focus();
}

function hideInputAddress() {
  displayAddress.style.display = "block";
  btnShowInputAddress.style.display = "block";
  displayInputAddress.style.display = "none";
}
//// profile address end
// profile setting menu end

// subscription active menu
let btnSubscriptionActive = document.getElementById("btnSubscriptionActive");
let btnSubscriptionExpired = document.getElementById("btnSubscriptionExpired");

function btnSubscriptionActiveOn() {
  btnSubscriptionReset();
  btnSubscriptionActive.classList.add("link-border-b-active");
}

function btnSubscriptionExpiredOn() {
  btnSubscriptionReset();
  btnSubscriptionExpired.classList.add("link-border-b-active");
}

function btnSubscriptionReset() {
  btnSubscriptionActive.classList.remove("link-border-b-active");
  btnSubscriptionExpired.classList.remove("link-border-b-active");
}

// subscription active menu end

// transaction active menu

let btnTransactionAll = document.getElementById("btnTransactionAll");
let btnTransactionPending = document.getElementById("btnTransactionPending");
let btnTransactionFailed = document.getElementById("btnTransactionFailed");
let btnTransactionSuccess = document.getElementById("btnTransactionSuccess");

function btnTransactionAllOn() {
  btnTransactionReset();
  btnTransactionAll.classList.add("link-border-b-active");
}

function btnTransactionPendingOn() {
  btnTransactionReset();
  btnTransactionPending.classList.add("link-border-b-active");
}

function btnTransactionFailedOn() {
  btnTransactionReset();
  btnTransactionFailed.classList.add("link-border-b-active");
}

function btnTransactionSuccessOn() {
  btnTransactionReset();
  btnTransactionSuccess.classList.add("link-border-b-active");
}

function btnTransactionReset() {
  btnTransactionAll.classList.remove("link-border-b-active");
  btnTransactionPending.classList.remove("link-border-b-active");
  btnTransactionFailed.classList.remove("link-border-b-active");
  btnTransactionSuccess.classList.remove("link-border-b-active");
}

// transaction active menu end
