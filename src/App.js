import './App.css';
import {useEffect, useState} from 'react';
import {Box,Container,VStack,Button,Input,HStack} from '@chakra-ui/react'
import Message from './Message';
import {app} from './firebase' 
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { 
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
  } from 'firebase/auth'

  const auth=getAuth(app)
const db =getFirestore(app)
const loginHandler = ()=>{
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth,provider)
}


const logouthander = ()=> signOut(auth)



function App() {
  
  const [user,setUser] = useState(false);

  const submithandler = async(e)=>{
    e.preventDefault();

    try {
      await addDoc(collection(db,"Message"),{
        text: "asjd",
        uid: user.uid,
        uri: user.photoURL,
        createdAt: serverTimestamp()
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth,(data)=>{
      setUser(data)
      console.log('hello')
    });

    return ()=>{
      unsubscribe();
    };
  });

  return (
      <Box bg={"red.50"}>
        {user ?(
          <Container h={"100vh"} bg={'white'}>
            <VStack h="full" paddingY="4" >
              <Button onClick={logouthander} colorScheme={"red"} w={"full"} overflowY="auto">
                Logout
              </Button>
            
            <VStack h="full" w={"full"}>
              <Message text="sample message"/>
              <Message user="me" text="sample message"/>
              <Message user="me" text="sample message"/>
              <Message user="me" text="sample message"/>
              <Message text="sample message"/>
            </VStack>
              <form onSubmit={submithandler} style={{ width:"100%" }}> 
                <HStack>
                <Input  placeholder={"Enter Message here.. "}/>
                <Button type="submit" colorScheme={"red"}> Send</Button>
                </HStack>
              </form>
              </VStack>
            
        </Container>
        ): (
          <VStack justifyContent={"center"} h="100vh">
            <Button colorScheme={"purple"} onClick={loginHandler} >Sign In With Google</Button>
          </VStack>
        )}
      </Box>

  );
}

export default App;
