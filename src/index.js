import React from 'react';
import styles from './styles.module.css';

export const DotLoader=({type=4})=>{

   var types=[styles.type_1,styles.type_2,styles.type_3,styles.type_4,styles.type_5,styles.type_6,
              styles.type_7,styles.type_8,styles.type_9,styles.type_10,styles.type_11,styles.type_12,
              styles.type_13,styles.type_14,styles.type_15,styles.type_16,styles.type_17,styles.type_18,
              styles.type_19,styles.type_20,styles.type_21,styles.type_22,styles.type_23,styles.type_24,
              styles.type_25,styles.type_26,styles.type_27,styles.type_28,styles.type_29,styles.type_30,
              styles.type_31,styles.type_32,styles.type_33,styles.type_34,styles.type_35,styles.type_36,
              styles.type_37,styles.type_38,styles.type_39,styles.type_40,styles.type_41,styles.type_42,
              styles.type_43,styles.type_44,styles.type_45,styles.type_46,styles.type_47,styles.type_48,
              styles.type_49,styles.type_50];

  return (  <div className={styles.container}>
               <div className={types[type]}></div>
            </div>
         );

}


