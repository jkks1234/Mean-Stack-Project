#include <iostream>
using namespace std;
int main()
{
	int i,j,k,l,m,n,t;
	cin>>t;
	while(t--)
	{
		cin>>n;
		unsigned long long int p=10,p1=11;
		while(!(p%n==0 || p1%n==0))
		{
			p=p*10;
			p1=p*10+1;
		}
		if(p%n==0)
		{
			cout<<p<<endl;
		}
		else
		{
			cout<<p1<<endl;
		}

	}
}