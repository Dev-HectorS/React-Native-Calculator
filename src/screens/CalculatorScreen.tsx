import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Button from '../components/Button';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorScreen = () => {

   const {
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
   } = useCalculator();

   return (
      <>
         <View style={styles.calculatorContainer}>
            {
               (previous !== '0') && (
                  <Text style={styles.smallResult}>{previous}</Text>
               )
            }
            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>{number}</Text>
            <View style={styles.row}>
               <Button text="C" action={btnClean} />
               <Button text="+/-" action={btnPositiveNegative} />
               <Button text="Del" action={btnDeleteNumber} />
               <Button text="/" color="#FF9427" action={btnDivision} />
            </View>
            <View style={styles.row}>
               <Button text="7" color="#2D2D2D" action={mathOperation} />
               <Button text="8" color="#2D2D2D" action={mathOperation} />
               <Button text="9" color="#2D2D2D" action={mathOperation} />
               <Button text="x" color="#FF9427" action={btnMultiplication} />
            </View>
            <View style={styles.row}>
               <Button text="4" color="#2D2D2D" action={mathOperation} />
               <Button text="5" color="#2D2D2D" action={mathOperation} />
               <Button text="6" color="#2D2D2D" action={mathOperation} />
               <Button text="-" color="#FF9427" action={btnSubtraction} />
            </View>
            <View style={styles.row}>
               <Button text="1" color="#2D2D2D" action={mathOperation} />
               <Button text="2" color="#2D2D2D" action={mathOperation} />
               <Button text="3" color="#2D2D2D" action={mathOperation} />
               <Button text="+" color="#FF9427" action={btnAddition} />
            </View>
            <View style={styles.row}>
               <Button text="0" color="#2D2D2D" width action={mathOperation} />
               <Button text="." color="#2D2D2D" action={mathOperation} />
               <Button text="=" color="#FF9427" action={btnCalculate} />
            </View>
         </View>
      </>
   )
}

export default CalculatorScreen;