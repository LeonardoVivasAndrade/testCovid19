test(S,B,C,D,E,F,G,H,I,J,K,L) :-score(Z,B),score(Y,C),score(X,D),score(W,E),
    	      score(V,F),score(U,G),score2(T,H),score2(R,I),score3(Q,J),
              score3(P,K),score3(O,L),
       		 result(S,O+P+Q+R+T+U+V+W+X+Y+Z).

score(1,A):- A=y,!.
score(0,A):- A=n,!.
score2(2,A):- A=y,!.
score2(0,A):- A=n,!.
score3(3,A):- A=y,!.
score3(0,A):- A=n,!.

result('Puede estar relacionado con estrés', Pts):- Pts>=0, Pts=<2, !.
result('Hidrate adecuadamente, buena higiene personal, observe y revalore', Pts):- Pts>=3, Pts=<5, !.
result('Debe ir a una consulta médica ', Pts):- Pts>=6, Pts=<12, !.
result('Reportese de inmediato a epidemiología ', Pts):- Pts>=13, Pts=<20, !.