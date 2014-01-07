module ApplicationHelper

  def ipsum(times = 1, extra = '')
    lorem = "Lorem ipsum dolere sit amet consecuter adspecit nomen es quid. "
    raw (lorem * times) + extra.html_safe
  end

end
