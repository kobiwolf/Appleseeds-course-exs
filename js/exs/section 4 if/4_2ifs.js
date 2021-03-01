function func(num) {
  if (0 <= num && num <= 64) {
    return 'F';
  } else if (65 <= num && num <= 69) {
    return 'D';
  } else if (70 <= num && num <= 79) {
    return 'C';
  } else if (80 <= num && num <= 89) {
    return 'B';
  } else {
    return 'A';
  }
}
func(3);
