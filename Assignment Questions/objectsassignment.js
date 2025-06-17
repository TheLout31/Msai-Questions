let studentScores = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
  };
  
  for(let name in studentScores){
      if(studentScores[name] > 90){
         studentScores[name] = "A" 
      }
      else if (studentScores[name]>= 80 && studentScores[name] < 90){
          studentScores[name] = "B" 
      }
      else if (studentScores[name]>= 70 && studentScores[name] < 80){
          studentScores[name] = "C" 
      }
      else if (studentScores[name]>= 60 && studentScores[name] < 70){
          studentScores[name] = "D" 
      }
      else {
          studentScores[name] = "F" 
      }
      
  }
  
  console.log(studentScores)
  