package com.example.demo.controller;

import javax.validation.Valid;

import org.hibernate.annotations.ValueGenerationType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.model.Teacher;
import com.example.demo.services.TeacherService;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@CrossOrigin(origins="http://localhost:3000")
public class MainController
{	
	@Autowired
	private TeacherService teacherService;
	
	@RequestMapping(path="/")
	public String index(Model model){
		model.addAttribute("title", "Welcome");
		System.out.println("Index");
		return "index";
	}
	
	@GetMapping(value={"/","/login"})
    public ModelAndView login(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login");
        return modelAndView;
    }


    @GetMapping(value="/registration")
    public ModelAndView registration(){
        ModelAndView modelAndView = new ModelAndView();
        Teacher teacher = new Teacher();
        modelAndView.addObject("teacher", teacher);
        modelAndView.setViewName("registration");
        return modelAndView;
    }
	
	
	
	@PostMapping(value="/registration")
	  public ModelAndView createNewTeacher(@Valid Teacher teacher, BindingResult bindingResult) {
	        ModelAndView modelAndView = new ModelAndView();
	        Teacher teacherExists = teacherService.findTeacherByUserName(teacher.getUserName());
	        if (teacherExists != null) {
	            bindingResult
	                    .rejectValue("userName", "error.teacher",
	                            "There is already a user registered with the email provided");
	        }
	        if (bindingResult.hasErrors()) {
	            modelAndView.setViewName("registration");
	        } else {
	            teacherService.saveTeacher(teacher);
	            modelAndView.addObject("successMessage", "User has been registered successfully");
	            modelAndView.addObject("teacher", new Teacher());
	            modelAndView.setViewName("registration");

	        }
	        return modelAndView;
	    }
}
