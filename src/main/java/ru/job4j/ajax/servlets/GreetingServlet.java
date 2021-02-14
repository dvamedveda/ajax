package ru.job4j.ajax.servlets;

import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Сервлет, возвращающий присланную почту обратно клиенту.
 * Почта возвращается в формате JSON.
 */
public class GreetingServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/json");
        resp.setCharacterEncoding("UTF-8");
        String email = req.getParameter("email");
        JSONObject result = new JSONObject();
        result.put("email", email);
        PrintWriter out = resp.getWriter();
        out.println(result);
        out.flush();
    }
}