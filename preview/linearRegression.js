class LinearRegression{
  w: Mat;
  constructor() {}

  //x: M-by-N matrix. M data with N dimensions. Each row is an N-dim vector
  //y: M-by-1 matrix
  fit(x_:Mat, y:Mat): LinearRegression{
    var y = y_;
    
    //check the dimension of y
    if (y_.rows != 1 && y_.cols == 1) {  y = y_.T();  }

    //expand x_ with one more column with 1 on the right
    var x = x_.resize(x_.rows, x_.cols + 1, 1);

    //calculate w = (X.T() * X)^-1 * X.T() * y
    this.w =  ( (x.T() * x) ^ (-1)   ) * x.T() * y.T();

    return this;
  }

  predict(x_:mat):mat{
    //expand x_ with one more column with 1 on the right
    var x = x_.resize(x_.rows, x_.cols+1, 1);
    return x* (this.w);    
  }
}