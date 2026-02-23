//donation 1
document.getElementById("btn_donate").addEventListener("click", function () {
  const donationAmount = document.getElementById("donation_amount").value;
  const donationBalance = document.getElementById("donation_balance").innerText;
  const totalDonation =
    parseFloat(donationAmount) + parseFloat(donationBalance);

  // Validate the donation amount
  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  document.getElementById("donation_balance").innerText = totalDonation + "BDT";
  //deducted from main balance
  const mainBalance = document.getElementById("main_balance").innerText;
  const totalMainBalance = parseFloat(mainBalance) - parseFloat(donationAmount);
  document.getElementById("main_balance").innerText = totalMainBalance + "BDT";

  // add to transaction history
  const p = document.createElement("p");
  p.innerText = ` Donation added ${donationAmount} BDT, Updated balance 
of noakhali is ${totalDonation} BDT and Account Balance is ${totalMainBalance} BDT
`;
  document.getElementById("donation_history").appendChild(p);
});
////donation 1 end

////donation 2 start
document.getElementById("btn_donate2").addEventListener("click", function () {
  const donationAmount2 = document.getElementById("donation_amount2").value;
  const donationBalance2 =
    document.getElementById("donation_balance2").innerText;
  const totalDonation2 =
    parseFloat(donationAmount2) + parseFloat(donationBalance2);

  // Validate the donation amount
  if (isNaN(donationAmount2) || donationAmount2 <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  document.getElementById("donation_balance2").innerText =
    totalDonation2 + "BDT";
  //deducted from main balance
  const mainBalance = document.getElementById("main_balance").innerText;
  const totalMainBalance =
    parseFloat(mainBalance) - parseFloat(donationAmount2);
  document.getElementById("main_balance").innerText = totalMainBalance + "BDT";

  // add to transaction history
  const p = document.createElement("p");
  p.innerText = ` Donation added ${donationAmount2} BDT, Updated balance for Flood Relief in Feni,Bangladesh
  is ${totalDonation2} BDT and Account Balance is ${totalMainBalance} BDT
  `;
  document.getElementById("donation_history").appendChild(p);
});
//donation 2 end

////donation 3 start
document.getElementById("btn_donate3").addEventListener("click", function () {
  const donationAmount3 = document.getElementById("donation_amount3").value;
  const donationBalance3 =
    document.getElementById("donation_balance3").innerText;
  const totalDonation3 =
    parseFloat(donationAmount3) + parseFloat(donationBalance3);

  // Validate the donation amount
  if (isNaN(donationAmount3) || donationAmount3 <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  document.getElementById("donation_balance3").innerText =
    totalDonation3 + "BDT";
  //deducted from main balance
  const mainBalance = document.getElementById("main_balance").innerText;
  const totalMainBalance =
    parseFloat(mainBalance) - parseFloat(donationAmount3);
  document.getElementById("main_balance").innerText = totalMainBalance + "BDT";

  // add to transaction history
  const p = document.createElement("p");
  p.innerText = ` Donation added ${donationAmount3} BDT, Updated balance 
  for Aid Injured in the Quota Movement is ${totalDonation3} BDT and Account Balance is ${totalMainBalance} BDT
  `;
  document.getElementById("donation_history").appendChild(p);
});
///donation3
