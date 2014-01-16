class CardsPresenter

  def initialize
  end

  def tiles
    [
      { type: 'client', pathname: 'client',            title: 'Client Name 01',      subtitle: 'Service Offering, Another Service, Third Service' },
      { type: 'study',  pathname: 'case_study',        title: 'Client 01',           subtitle: 'Service Offering, Another Service', image: 'fpo/fpo-tile.jpg' },
      { type: 'client', pathname: 'client',            title: 'Client Name 02',      subtitle: 'Service Offering, Another Service' },
      { type: 'skill',  pathname: 'user_experience',   title: 'User Experience',     icon:     'user-experience' },
      { type: 'study',  pathname: 'case_study',        title: 'Client 02',           subtitle: 'Service Offering, Another Service', image: 'fpo/fpo-tile.jpg' },
      { type: 'skill',  pathname: 'creative_concept',  title: 'Creative Concept',    icon:     'creative-concept' },
      { type: 'study',  pathname: 'case_study',        title: 'Client 03',           subtitle: 'Service Offering, Another Service', image: 'fpo/fpo-tile.jpg' },
      { type: 'client', pathname: 'client',            title: 'Client Name 03',      subtitle: 'Service Offering, Another Service' },
      { type: 'client', pathname: 'client',            title: 'Client Name 04',      subtitle: 'Service Offering, Another Service' },
      { type: 'study',  pathname: 'case_study',        title: 'Client 04',           subtitle: 'Service Offering, Another Service', image: 'fpo/fpo-tile.jpg' },
      { type: 'client', pathname: 'client',            title: 'Client Name 05',      subtitle: 'Service Offering, Another Service' },
      { type: 'skill',  pathname: 'user_interface',    title: 'User Interface',      icon:     'user-interface' },
      { type: 'study',  pathname: 'case_study',        title: 'Client 05',           subtitle: 'Service Offering, Another Service', image: 'fpo/fpo-tile.jpg' },
      { type: 'skill',  pathname: 'graphic_design',    title: 'Graphic Design',      icon:     'graphic-design' },
      { type: 'study',  pathname: 'case_study',        title: 'Client 06',           subtitle: 'Service Offering, Another Service', image: 'fpo/fpo-tile.jpg' },
      { type: 'client', pathname: 'client',            title: 'Client Name 06',      subtitle: 'Service Offering, Another Service' }
    ]
  end

end

