import { evaluate } from "mathjs";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [r, setR] = useState("")
  const ultimoCaracter = (r.slice(-1))
  const apagarUltimoSinal = (r.slice(0,-1))
  const [a, setA] = useState(1)
  const [b, setB] = useState(0)
  const [result, setResult] = useState("")

  function adicionarUm(){
    setR(r+"1");
  }
  function adicionarDois(){
    setR(r+"2")
  }
  function adicionarTres(){
    setR(r+"3")
  }
  function adicionarQuatro(){
    setR(r+"4")
  }
  function adicionarCinco(){
    setR(r+"5")
  }
  function adicionarSeis(){
    setR(r+"6")
  }
  function adicionarSete(){
    setR(r+"7")
  }
  function adicionarOito(){
    setR(r+"8")
  }
  function adicionarNove(){
    setR(r+"9")
  }
  function adicionarZero(){
    setR(r+"0")
  }
  function SinalDeRaizQuadrada(){
    setR(r+"sqrt(")
  }
  function fecharAraizDeModoAutomatico() {
  if (r.includes("sqrt(") && !r.endsWith(")")) {
    return r + ")";
  }
  return r;
  }
  function adicionarSinalDeMultiplicacao(){
    setR(fecharAraizDeModoAutomatico()+"*")
  }
  function adicionarSinalDeMenos(){
    setR(fecharAraizDeModoAutomatico()+"-")
  }
  function adicionarSinalDeMais(){
    setR(fecharAraizDeModoAutomatico()+"+")
  }
  function adicionarVirgula(){
    setR(fecharAraizDeModoAutomatico()+",")
  }

  function adicionarSinalDeDivisao(){
    setR(fecharAraizDeModoAutomatico()+"/")
  }

  function darResultado() {
  let expressaoFinal = r;

  const aberturaDaRaiz = (expressaoFinal.match(/\(/g) || []).length;
  const fechamentoDaRaiz = (expressaoFinal.match(/\)/g) || []).length;

  if (aberturaDaRaiz > fechamentoDaRaiz) {
    expressaoFinal += ")";
  }

  try {
    setResult(evaluate(expressaoFinal));
  } catch {
    setResult("Erro");
  }
}

  function apagarTudo(){
    setR("")
  }

  function apagarQuaseTudo() {
  if (r.endsWith("sqrt(")) { setR(r.slice(0, -5)); } else 
    { setR(r.slice(0, -1)); }
  }



  return (
    <View style={styles.bordas}>


      
      <SafeAreaView style={styles.Resultado}>
          <Text style={styles.tamanhoCaracter}> conta: {r}</Text>
          <Text style={styles.tamanhoCaracter}> Resultado: {result}</Text>
      </SafeAreaView>

      <SafeAreaView style={{ flexDirection: "row"}} >
        <TouchableOpacity style={styles.teclas} onPress={adicionarUm}> <Text style={styles.tamanhoCaracter} > 1 </Text> </TouchableOpacity> 
        <TouchableOpacity style={styles.teclas} onPress={adicionarDois}> <Text style={styles.tamanhoCaracter}> 2 </Text> </TouchableOpacity> 
        <TouchableOpacity style={styles.teclas} onPress={adicionarTres}> <Text style={styles.tamanhoCaracter}> 3 </Text> </TouchableOpacity> 
        <TouchableOpacity style={styles.teclas} onPress={adicionarSinalDeMultiplicacao}> <Text style={styles.tamanhoCaracter}> * </Text> </TouchableOpacity> 
      </SafeAreaView>

      <SafeAreaView style={{ flexDirection: "row"}}>
        <TouchableOpacity style={styles.teclas} onPress={adicionarQuatro}> <Text style={styles.tamanhoCaracter}> 4 </Text> </TouchableOpacity> 
        <TouchableOpacity style={styles.teclas} onPress={adicionarCinco}> <Text style={styles.tamanhoCaracter}> 5 </Text> </TouchableOpacity> 
        <TouchableOpacity style={styles.teclas} onPress={adicionarSeis}> <Text style={styles.tamanhoCaracter}> 6 </Text> </TouchableOpacity> 
        <TouchableOpacity style={styles.teclas} onPress={adicionarSinalDeMenos}> <Text style={styles.tamanhoCaracter}> - </Text> </TouchableOpacity> 
      </SafeAreaView>

      <SafeAreaView style={{flexDirection: "row"}}>
        <TouchableOpacity style={styles.teclas} onPress={adicionarSete}> <Text style={styles.tamanhoCaracter}> 7 </Text> </TouchableOpacity> 
        <TouchableOpacity style={styles.teclas} onPress={adicionarOito}> <Text style={styles.tamanhoCaracter}> 8 </Text> </TouchableOpacity> 
        <TouchableOpacity style={styles.teclas} onPress={adicionarNove}> <Text style={styles.tamanhoCaracter}> 9 </Text> </TouchableOpacity>
        <TouchableOpacity style={styles.teclas} onPress={adicionarSinalDeMais}> <Text style={styles.tamanhoCaracter}> + </Text> </TouchableOpacity> 
      </SafeAreaView>
      
      <SafeAreaView style={{flexDirection: "row"}}>
        <TouchableOpacity style={styles.teclas} onPress={adicionarVirgula}> <Text style={styles.tamanhoCaracter}> , </Text> </TouchableOpacity> 
        <TouchableOpacity style={styles.teclas} onPress={adicionarSinalDeDivisao}> <Text style={styles.tamanhoCaracter}> / </Text> </TouchableOpacity> 
        <TouchableOpacity style={styles.teclas} onPress={adicionarZero}> <Text style={styles.tamanhoCaracter}> 0 </Text> </TouchableOpacity>
        <TouchableOpacity style={styles.teclas} onPress={(darResultado)}> <Text style={styles.tamanhoCaracter}> = </Text> </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.teclas} onPress={SinalDeRaizQuadrada}> <Text style={styles.tamanhoCaracter}> √ </Text> </TouchableOpacity>
        <TouchableOpacity style={styles.teclas} onPress={apagarTudo}> <Text style={styles.tamanhoCaracter}> C </Text> </TouchableOpacity>
        <TouchableOpacity style={styles.teclas} onPress={apagarQuaseTudo}> <Text style={styles.tamanhoCaracter}> ⌫ </Text> </TouchableOpacity>
      </SafeAreaView>

    </View>
  
  )
}

const styles = StyleSheet.create({
  bordas: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#111",
    padding: 10
  },

  Resultado: {
    minHeight: 120,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#1e1e1e",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20
  },

  tamanhoCaracter: {
    fontSize: 28,
    color: "white"
  },

  teclas: {
  flex: 1,
  margin: 6,
  height: 50,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#2a2a2a",
  borderRadius: 15,
  padding: 10
},

Raizquadrada: {
  fontSize: 28,
  color: "white",
  flex: 1,
  margin: 6,
  height: 70,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#2a2a2a",
  borderRadius: 15,
},
});