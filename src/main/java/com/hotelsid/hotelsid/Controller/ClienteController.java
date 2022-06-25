package com.hotelsid.hotelsid.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.hotelsid.hotelsid.model.Cliente;
import com.hotelsid.hotelsid.repository.ClienteRepository;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;
    
    @PostMapping
    public Cliente adicionar(Cliente cliente){
        return clienteRepository.save(cliente);
    }

    @GetMapping
    public List<Cliente> listar(){
        return clienteRepository.findAll();
    }

    @GetMapping("/{id}")
    public Cliente buscarPorId(@PathVariable Long id){
        Optional<Cliente> clienteOpcional = clienteRepository.findById(id);
        if(clienteOpcional.isPresent()){
           throw new ResponseStatusException(HttpStatus.NOT_FOUND) ;
        }
        
        return clienteOpcional.get();
    }

    @DeleteMapping("/delete/{id}")
    //@GetMapping("/delete/{id}")
    public Cliente excluirPorID(@PathVariable Long id){
        Optional<Cliente> clienteOpcional = clienteRepository.findById(id);
        clienteRepository.delete(clienteOpcional.get());
        return clienteOpcional.get();
    }
    
}
