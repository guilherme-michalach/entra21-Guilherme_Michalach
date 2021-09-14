import React, { useState, useEffect, useRef } from "react";
import { ScrollView, Text, Button, Animated } from "react-native";

export function UseRefScreen() {
    const intervaloRef = useRef();
    const [count, setContar] = useState(0);

    useEffect(() => {
        intervaloRef.current = setInterval(
          () => setContar((count) => count + 1),
          1000
        )
    
        return () => {
          clearInterval(intervaloRef.current)
        }
      }, [])

      const largura = useRef(new Animated.Value(0)).current;
      const altura = useRef(new Animated.Value(150)).current;
      const teste =  [
          Animated.sequence([
              Animated.timing(
                  largura,
                  {
                      toValue: 250,
                      duration: 5000,
                      useNativeDriver: false
                  }
              )
              ]).start()
      ];

    return (
        <ScrollView>
            <Text>useRef retorna um objeto mutável/modificavel, ele precisa de .current nele para inicializar o argumento inicial. O objeto retornado persiste durante todo o ciclo de vida dele.</Text>  
            <Text style={{ fontSize: 120 }}>{count}</Text>
            <Button
                title="Stop"
                onPress={() => {
                clearInterval(intervaloRef.current)
                }}
            />
            <Animated.View style={{
                width: largura,
                height: altura,
                backgroundColor: '#524',
                teste
            }} />
        </ScrollView>
    );
}