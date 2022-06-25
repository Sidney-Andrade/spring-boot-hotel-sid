package com.hotelsid.hotelsid;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class homeController {
    
    @RequestMapping("/")
    public String index(){
        return "index";
    }

    @RequestMapping("/formCadCliente")
    public String formCadCliente(){
        return "formCadCliente";
    }

    @RequestMapping("/gerenciar")
    public String gerenciar(){
        return "gerenciar";
    }
}
