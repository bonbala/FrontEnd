'use client'

import React, {useState } from 'react'


const Page = () => {

    const [reverseInput, setReverseInput] = useState('') 
    const [palindrome, setPlindrome] = useState('')
    const [isPalindrome, setIsPalindrome] = useState<boolean>()
    const [arrNumbers, setArrNumbers] = useState<string>()
    const [largestNumber, setLargestNumber] = useState<number>()
    const [sumArrNumbers, setSumArrNumbers] = useState<string>()
    const [sumArr, setSumArr] = useState<number>()

    const [primeInput, setPrimeInput] = useState<string>('');
    const [primeResult, setPrimeResult] = useState<boolean | null>(null);

    // const [duplicatestInput, setDuplicatestInput] = useState('')
    // const [resultDup, setResultDup] = useState<number>()

    // Bai 7
    const [countInput, setCountInput] = useState<string>('')


    const CheckPalindrome = () => {
        setIsPalindrome(palindrome == palindrome.split('').reverse().join(''))
    }
    
    const LargestNumber = () => {
        if (!arrNumbers) return;
    
        const arr = arrNumbers
            .split(',')
            .map(Number)
            .filter(n => !isNaN(n));
    
        if (arr.length === 0) {
            setLargestNumber(undefined);
            return;
        }
        const max = Math.max(...arr);
        setLargestNumber(max);
    };

    const CalSumArr = () => {
        if(!sumArrNumbers) return
        const arr = sumArrNumbers.split(',').map(Number).filter(n=>!isNaN(n))
        if(arr.length === 0){
            setSumArr(undefined)
            return;
        }
        setSumArr(arr.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
          ))
    }

    const isPrime = (n: number): boolean => {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    };

    const handleCheckPrime = () => {
        const num = Number(primeInput?.trim());
        if (isNaN(num)) {
            setPrimeResult(null);
            return;
        }
        setPrimeResult(isPrime(num));
    };
    
    // const findDuplicatest = () => {
    //     if (!duplicatestInput) return;

    //     const arr = duplicatestInput
    //       .split(",")
    //       .map(Number)
    //       .filter((n) => !isNaN(n));

    //     const count: { [key: number]: number } = {};

    //     let maxCount = 0;
    //     let mostFrequentNumber = null;

    //     for (const num of arr) {
    //       count[num] = (count[num] || 0) + 1;

    //       if (count[num] > maxCount) {
    //         maxCount = count[num];
    //         mostFrequentNumber = num;
    //       }
    //     }

    //     setResultDup(mostFrequentNumber);

    // }
    
  return (
    <div className="bg-white! text-black! p-5 min-h-[100vh]">
      <h1>Bai 1 : Dao nguoc mot chuoi</h1>
      <input
        type="text"
        placeholder="Input"
        value={reverseInput}
        onChange={(e) => setReverseInput(e.target.value)}
        name=""
        id=""
        className="border p-1"
      />
      <h1>Kết quả: {reverseInput.split("").reverse()}</h1>

      <h1 className="mt-5">Bai 2 : Chu co phai la Palindrome</h1>
      <input
        type="text"
        placeholder="Input"
        value={palindrome}
        className="border p-1"
        onChange={(e) => setPlindrome(e.target.value)}
      />
      <button
        className="ml-2 px-2 py-1 border active:bg-gray-500"
        onClick={() => CheckPalindrome()}
      >
        Kiểm tra
      </button>
      <h1>Kết quả: {isPalindrome ? "Là Palindrome" : "Không phải là Palindrome"}</h1>

      <h1 className="mt-5">Bai 3: Tim so lon nhat</h1>
      <input
        type="text"
        placeholder="[1,3,4,6]"
        className="border p-1"
        onChange={(e) => setArrNumbers(e.target.value)}
      />
      <button
        className="ml-2 px-2 py-1 border active:bg-gray-500"
        onClick={() => LargestNumber()}
      >
        Tìm kiếm
      </button>
      <h1>Kết quả: {largestNumber} </h1>

      <h1 className="mt-5">Bai 4: Tinh tong cac phan tu trong mang</h1>
      <input
        type="text"
        placeholder="[1,3,4,6]"
        className="border p-1"
        onChange={(e) => setSumArrNumbers(e.target.value)}
      />
      <button
        className="ml-2 px-2 py-1 border active:bg-gray-500"
        onClick={() => CalSumArr()}
      >
        Tìm kiếm
      </button>
      <h1>Kết quả: {sumArr} </h1>

      <h1 className="mt-5">Bài 5: Kiểm tra số nguyên tố</h1>
      <input
        type="number"
        placeholder="Nhập số cần kiểm tra"
        className="border p-1"
        value={primeInput}
        onChange={(e) => setPrimeInput(e.target.value)}
      />
      <button
        className="ml-2 px-2 py-1 border active:bg-gray-500"
        onClick={handleCheckPrime}
      >
        Kiểm tra
      </button>
      <h1>
        Kết quả:{" "}
        {primeResult === null
          ? "Vui lòng nhập số hợp lệ"
          : primeResult
          ? "Là số nguyên tố"
          : "Không phải số nguyên tố"}
      </h1>

      {/* <h1 className='mt-5'>Bai 6: Tim phan tu xuat hien nhieu nhat trong mang</h1>
      <input type="text" placeholder=' [1, 2, 2, 3, 1, 2]' className='border p-1 mr-2' onChange={(e)=>setDuplicatestInput(e.target.value)}/>
      <button className='active:bg-gray-500 px-2 py-1 border' onClick={()=>findDuplicatest()}>Tim kiem</button>
      <h1>Ket qua: {resultDup}</h1> */}

      <h1 className='mt-5'>Bài 7: Đếm số ký tự trong chuôi</h1>
      <input type="text" placeholder='Nhập ký tự' className='border p-1 mr-2' onChange={(e)=>setCountInput(e.target.value)}/>
      <h1>Số ký tự: {countInput.split('').length}</h1>
      
    </div>
  );
}

export default Page