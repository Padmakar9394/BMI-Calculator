import React from 'react';

import { useState } from "react";


const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(null);

  const [status, setStatus] = useState("");

  function CalculateBMI() {
    let bmi=Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);
    setStatus(bmiStatus);

    setHeight("");
    setWeight("");

    function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }
  }

  return <div>
    <div class="w-full max-w-xs m-10">
 <form class="bg-orange-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
   <h1 className="text-center text-xl mb-4">BMI Calculator</h1>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Height
      </label>
      <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id="Height" 
        type="text" 
        placeholder="Height in cm"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Weigth in Kg
      </label>
      <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="Weight"
            type="text"
            placeholder="Weight in Kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
        />
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      type="button"
      onClick={CalculateBMI}
      >
        Calculate BMI
      </button>
    </div>
    { bmiResult &&
        <div>
          <p>Your BMI is: {bmiResult}</p>
          <p>You are currently {status}</p>
        </div>
    }
  </form>
</div>
  </div>;
};

export default BmiCalculator;
