using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebAppDemo.Models;

namespace WebAppDemo
{
    [Route("api/[controller]")]
    public class ArticlesController : Controller
    {
        [HttpGet("")]
        public IEnumerable<ArticleOverview> List(string username)
		{
			var articles = new List<ArticleOverview> {
				new ArticleOverview()
				{
					Title = "Test",
					TitleImg = "square-image.png",
					To = "/articles/1",
					Date = new DateTime(),
					Teaser = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				new ArticleOverview()
				{
					Title = "Test",
					TitleImg = "square-image.png",
					To = "/articles/1",
					Date = new DateTime(),
					Teaser = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
			};

			return articles;
		}

    }
}
