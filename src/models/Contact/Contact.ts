export interface Contact {
  results: Result[];
}

export interface Result {
  gender:   string;
  name:     Name;
  location: Location;
  email:    string;
  dob:      Dob;
  phone:    string;
  cell:     string;
  id:       ID;
  picture:  Picture;
  nat:      string;
}

export interface Dob {
  date: Date;
  age:  number;
}

export interface ID {
  name:  string;
  value: string;
}

export interface Location {
  street:      Street;
  city:        string;
  state:       string;
  country:     string;
  postcode:    number;
  coordinates: Coordinates;
  timezone:    Timezone;
}

export interface Coordinates {
  latitude:  string;
  longitude: string;
}

export interface Street {
  number: number;
  name:   string;
}

export interface Timezone {
  offset:      string;
  description: string;
}

export interface Name {
  title: string;
  first: string;
  last:  string;
}

export interface Picture {
  large:     string;
  medium:    string;
  thumbnail: string;
}
