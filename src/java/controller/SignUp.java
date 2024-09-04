package controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import dto.User_DTO;
import entity.User;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author KS COMPUTERS
 */
@WebServlet(name = "SignUp", urlPatterns = {"/SignUp"})
public class SignUp extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create();
        
        User_DTO user_DTO = gson.fromJson(request.getReader(), User_DTO.class);
        System.out.println(user_DTO.getPassword());
        
    }

}
