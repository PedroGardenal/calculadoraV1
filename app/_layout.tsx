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
  const [result, setResult] = useState(0)

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
  function adicionarSinalDeMultiplicacao(){
    setR(r+"*")
  }
  function adicionarSinalDeMenos(){
    setR(r+"-")
  }
  function adicionarSinalDeMais(){
    setR(r+"+")
  }
  function adicionarVirgula(){
    setR(r+",")
  }

  function adicionarSinalDeDivisao(){
    setR(r+"/")
  }

  function abrirSinalDeRaizQuadrada(){
    setR(r+"sqrt(")
  }

  function fecharSinalDeRaizQuadrada(){
    setR(r+")")
  }

  function darResultado(){
    setResult(evaluate(r))
  }

  function apagarTudo(){
    setR("")
  }

  function apagarQuaseTudo(){
      setR(apagarUltimoSinal) 
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
        <TouchableOpacity style={styles.teclas} onPress={(darResultado)}> <Text style={{fontSize: 50}}> = </Text> </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity> <Text onPress={(abrirSinalDeRaizQuadrada)} style={styles.teclas}> Abrir Raiz Quadrada </Text></TouchableOpacity>
          <TouchableOpacity> <Text onPress={(fecharSinalDeRaizQuadrada)} style={styles.teclas}> Abrir Raiz Quadrada </Text></TouchableOpacity>
        </View>
        <TouchableOpacity> <Text onPress={(apagarTudo)} style={styles.teclas}> APAGAR TUDO</Text> </TouchableOpacity>
        <TouchableOpacity> <Text onPress={(apagarQuaseTudo)} style={styles.teclas}>Apagar Ultima Letra</Text> </TouchableOpacity> 
      </SafeAreaView> 

    </View>
  
  )
}

const styles = StyleSheet.create({
      teclas:{
        margin: 10,
        borderRadius: 20,
        borderColor: "#07060444",
        borderStyle: "dashed",
        borderWidth: 10,
        backgroundColor: "#07060444"
      },

      Resultado:{
        margin: 10,
        borderRadius: 20,
        borderColor: "#07060444",
        borderStyle: "dashed",
        borderWidth: 10,
        backgroundColor: "#07060444"
      },

      tamanhoCaracter: {
        fontSize: 30
      },

      bordas: {
        marginLeft: 650,
        marginRight: 650,
        alignItems: "center",
        borderBlockColor: "black",
        borderStyle: "solid",
        borderWidth: 10
      }

    });