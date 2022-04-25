import io from "socket.io-client";

let socket = io("https://servidor-socket-sena.herokuapp.com/");

export default socket;