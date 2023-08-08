import React from 'react'

const useCalculate = (MJscore,PYscore) => {
    const mj_score = MJscore || 0;
    const py_score = PYscore || 0;
    const score = (mj_score+py_score)/(mj_score && py_score ? 2 :1);
  return (score.toFixed(1))
}

export default useCalculate;