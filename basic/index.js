// Check if the srting is pelendromic...
let str = "racecar";
let bag = "";
for (let i = str.length - 1; i >= 0; i--) {
  bag += str[i]
}
bag === str ? console.log("string is palindromic") : console.log("Stirng is not palindromic")

// Remove duplicates from an array without inbuild functions...

function removeDuplicates(arr) {
  const seen = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (!seen[value]) {
      result.push(value);
      seen[value] = true;
    }
  }

  return result
}
let ans = removeDuplicates([1, 2, 3, 4, 2, 3, 1])
console.log(ans)


// Real world problem, make request if promise reject based on given limit and delay...F 

function getApi() {
  return new Promise((resolve, reject) => {
    let fake_data = {
      status: true,
      data: {
        name: "res1",
        id: 1,
      }
    }
    if (fake_data.status)
      resolve({ msg: "resolved", fake_data });
    else reject("rejected");
  })
}

function getApi() {
  return new Promise((resolve, reject) => {
    let fake_data = {
      status: false, // change to false to simulate failure
      data: {
        name: "res1",
        id: 1,
      }
    }
    if (fake_data.status)
      resolve({ msg: "resolved", fake_data });
    else reject("rejected");
  });
}

function requestWithRetry(func, limit, delay) {
  let requestCount = 0;

  function attempt() {
    func()
      .then((res) => {
        console.log("Success:", res);
      })
      .catch((err) => {
        requestCount++;
        console.log(`Attempt ${requestCount} failed:`, err);
        if (requestCount < limit) {
          setTimeout(attempt, delay);
        } else {
          console.log("All retry attempts failed.");
        }
      });
  }

  attempt(); // Start first attempt
}

requestWithRetry(getApi, 3, 2000);

// Describe how you would implement a function that counts how many times a specific character appears in a string.

let specific_str = "harshh";
const charCountofString = ()=>{
  let map = {};
 for (let i = 0; i<specific_str.length;i++){
  if(map[specific_str[i]]){
    map[specific_str[i]]++;
  }else{
    map[specific_str[i]]=1
  }
 }
 console.log(map)
}

charCountofString()







