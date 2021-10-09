import { useRef, useState } from 'react';

enum Operators {
   addition, subtraction, multiplication, division
}

export const useCalculator = () => {
   const [previous, setPrevious] = useState('0');
   const [number, setNumber] = useState('0');

   const operation = useRef<Operators>();

   const mathOperation = (numberSelected: string) => {
      // Double point
      if (number.includes('.') && numberSelected === ('.')) return;

      if (number.startsWith('0') || number.startsWith('-0')) {
         if (numberSelected === '.') {
            setNumber(number + numberSelected);
         } else if (numberSelected === '0' && number.includes('.')) {
            setNumber(number + numberSelected);
         } else if (numberSelected !== '0' && !number.includes('.')) {
            setNumber(numberSelected);
         } else if (numberSelected.includes('0') && !number.includes('.')) {
            setNumber(number);
         } else {
            setNumber(number + numberSelected);
         }
      } else {
         setNumber(number + numberSelected);
      }
   }

   const btnClean = () => {
      setNumber('0');
      setPrevious('0');
   }

   const previousNumber = () => {
      if (number.endsWith('.')) {
         setPrevious(number.slice(0, -1));
      } else {
         setPrevious(number);
      }
      setNumber('0');
   }

   const btnPositiveNegative = () => {
      if (number.includes('-')) {
         setNumber(number.replace('-', ''));
      } else {
         setNumber('-' + number)
      }
   }

   const btnDeleteNumber = () => {
      let negative = '';
      let tempNumber = number;

      if (number.includes('-')) {
         negative = '-';
         tempNumber = number.substr(1);
      }

      if (tempNumber.length > 1) {
         setNumber(negative + tempNumber.substr(0, tempNumber.length - 1));
      } else {
         setNumber('0');
      }

   }

   const btnDivision = () => {
      previousNumber();
      operation.current = Operators.division;
   }
   const btnMultiplication = () => {
      previousNumber();
      operation.current = Operators.multiplication;
   }
   const btnSubtraction = () => {
      previousNumber();
      operation.current = Operators.subtraction;
   }
   const btnAddition = () => {
      previousNumber();
      operation.current = Operators.addition;
   }

   const btnCalculate = () => {
      const num1 = Number(number);
      const num2 = Number(previous);

      switch (operation.current) {
         case Operators.division:
            setNumber(`${num2 / num1}`);
            break;

         case Operators.multiplication:
            setNumber(`${num1 * num2}`);
            break;

         case Operators.subtraction:
            setNumber(`${num2 - num1}`);
            break;

         case Operators.addition:
            setNumber(`${num1 + num2}`);
            break;

         default:
            break;
      }

      setPrevious('0');
   }


   return {
      previous,
      number,
      mathOperation,
      btnClean,
      btnPositiveNegative,
      btnDeleteNumber,
      btnDivision,
      btnMultiplication,
      btnSubtraction,
      btnAddition,
      btnCalculate
   }
}
