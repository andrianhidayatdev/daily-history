package main

import (
	"fmt"
)

func main(){

	var n int;

	fmt.Scan(&n);

	n = n / 4;

	if n%4 != 0 {
		n += 1
	}

	fmt.Println(n)


	// var bilangan int

	// fmt.Scan(&bilangan)

	// if (bilangan > 0 ){
	// 	fmt.Println("ganjil positif")
	// }else{
	// 	fmt.Println("bukan")
	// }


	var x,y int

	fmt.Scan(&x,&y)

	if(x%y == 0 ){
		fmt.Println(true)
		
		if(y%x == 0){
fmt.Println(true)
		}else{
			fmt.Println(false)
		}
	}else{
		fmt.Println(false)
	}


}