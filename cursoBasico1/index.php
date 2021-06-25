<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="description" content="Coca colaes la bebida y bla bla bla bla">
		<meta name="keywords" content="bebida, gaseosa, cola">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>
			Inicio - Coca Cola
		</title>
		<link rel="shortcut icon" href="img/favicon.png">
		<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="css/normalize.css">
		<link rel="stylesheet" href="style.css">
		<script src="https://kit.fontawesome.com/37ef4fca07.js" crossorigin="anonymous"></script>
	</head>
	<body>
		<header>
			<div class="container">
				<a href="index.html">
					<img src="img/logo.svg" class="logo">
				</a>
				<nav>
					<a href="#inicio">Inicio</a>
					<a href="#nosotros">Nosotros</a>
					<a href="#servicios">Servicios</a>
					<a href="#galeria">Galería</a>
					<a href="#contactenos">Contáctenos</a>
				</nav>
				<a href="#" class="hamb"><i class="fas fa-bars"></i></a>
			</div>
		</header>
		<main>
			<section id="inicio">
				<img src="img/bannerprincipal.jpg">
				<div class="bloque-inicio">
					<h1>Bienvenidos a Coca Cola</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					</p>
					<a href="#nosotros" class="boton boton-rojo">Ver más</a>
				</div>
			</section>
			<section id="nosotros" class="seccion">
				<div class="container">
					<p>Nam accumsan tellus tortor, at aliquet est sodales vitae. Praesent posuere nunc eget odio dapibus, sed cursus mauris tincidunt. Donec accumsan arcu et urna eleifend sodales. Sed at neque non leo tincidunt semper. In ligula enim, rutrum sit amet Lorem eu, congue dapibus nisi.</p> 
				</div>
			</section>
			<section id="servicios"  class="seccion">
				<div class="container">
					<div class="row">
						<div class="columna columna-33 columna-mobile-100">
							<div class="bloque-servicio">
								<div class="bloque-img-servicio cuadrado-perfecto">
									<img src="img/servicio1.jpg">
								</div>
								<div class="bloque-contenido-servicio">
									<h3>Servicio 1</h3>
									<p>Nam accumsan tellus tortor, at aliquet est sodales vitae. Praesent posuere nunc eget odio dapibus, sed cursus mauris tincidunt.</p>
									<a href="#" class="boton boton-blanco">Ver más</a>
								</div>
							</div>
						</div>
						<div class="columna columna-33 columna-mobile-100">
							<div class="bloque-servicio">
								<div class="bloque-img-servicio cuadrado-perfecto">
									<img src="img/servicio2.jpg">
								</div>
								<div class="bloque-contenido-servicio">
									<h3>Servicio 2</h3>
									<p>Nam accumsan tellus tortor, at aliquet est sodales vitae. Praesent posuere nunc eget odio dapibus, sed cursus mauris tincidunt.</p>
									<a href="#" class="boton boton-blanco">Ver más</a>
								</div>
							</div>
						</div>
						<div class="columna columna-33 columna-mobile-100">
							<div class="bloque-servicio">
								<div class="bloque-img-servicio cuadrado-perfecto">
									<img src="img/servicio3.jpg">
								</div>
								<div class="bloque-contenido-servicio">
									<h3>Servicio 3</h3>
									<p>Nam accumsan tellus tortor, at aliquet est sodales vitae. Praesent posuere nunc eget odio dapibus, sed cursus mauris tincidunt.</p>
									<a href="#" class="boton boton-blanco">Ver más</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="galeria">
				<div class="container-fluid">
					<div class="row">
						<div class=" columna-33 columna-mobile-50">
							<div class="cuadrado-perfecto">
								<img src="img/servicio1.jpg">
								<h4>Imagen1</h4>
							</div>
						</div>
						<div class=" columna-33   columna-mobile-50">
							<div class="cuadrado-perfecto">
								<img src="img/servicio2.jpg">
								<h4>Imagen2</h4>
							</div>	
						</div>
						<div class=" columna-33  columna-mobile-50">
							<div class="cuadrado-perfecto">
								<img src="img/servicio3.jpg">
								<h4>Imagen3</h4>
							</div>		
						</div>
						<div class=" columna-33  columna-mobile-50">
							<div class="cuadrado-perfecto">
								<img src="img/servicio1.jpg">
								<h4>Imagen4</h4>
							</div>	
						</div>
						<div class=" columna-33  columna-mobile-50">
							<div class="cuadrado-perfecto">
								<img src="img/servicio2.jpg">
								<h4>Imagen5</h4>
							</div>	
						</div>
						<div class=" columna-33  columna-mobile-50">
							<div class="cuadrado-perfecto">
								<img src="img/servicio3.jpg">
								<h4>Imagen6</h4>
							</div>	
						</div>
					</div>
				</div>
			</section>
			<section id="contactenos" class="seccion">
				<iframe width="520" height="400" frameborder="0"  src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Lima+(peru)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
				<div class="container-fluid">
					<div class="row">
						<div class="columna columna-41 columna-mobile-100 empujar-50 empujar-mobile-0 sinpadding-mobile">
							<form action="index.php" method="post">
								<div class="form-block">
									<input type="text" name="nombre" class="form-control" placeholder="Nombre">
								</div>
								<div class="form-block">
									<input type="email" name="email" class="form-control"  placeholder="Email">
								</div>
								<div class="form-block">
									<textarea name="mensaje"  placeholder="Mensaje"></textarea>
								</div>
								<div class="form-block bloque-ultimo">
									<input type="submit" class="boton boton-negro" value="Enviar">
								</div>
								<?php

									if($_SERVER["REQUEST_METHOD"] == "POST")
									{
										$nombre = $_POST["nombre"] ;
										$email = $_POST["email"] ;
										$mensaje = $_POST["mensaje"] ;

										if(isset($nombre))
										{
											if(isset($email))
											{
												if(isset($mensaje))
												{
													$para = ""; //colocar aqui el correo a dodne quieres que llegue
													$asunto = "Esto es una prueba";
													$cuerpo = $nombre."\n".$email."\n".$mensaje;
													$adicional = "From: luis.rocca96@gmail.com";

													mail($para,$asunto,$cuerpo,$adicional);
												?>
													<p>Envio exitoso</p>
												<?php
												}
											}
										}
									}
								?>
							</form>

						</div>
					</div>
				</div>

			</section>
		</main>
		<footer>
			<div class="container">
				<div class="row">
					<div class="columna columna-25 columna-mobile-100">
						<img src="img/logo-blanco.png" class="logo-footer">
						<p>
							Nam accumsan tellus tortor, at aliquet est sodales vitae. Praesent posuere nunc eget odio dapibus, sed cursus mauris tincidunt.
						</p>
					</div>
					<div class="columna columna-25 columna-mobile-100">
						<h3>
							Temas relacionados
						</h3>
						<ul>
							<li><a href="#">Tema 1</a></li>
							<li><a href="#">Tema 2</a></li>
							<li><a href="#">Tema 3</a></li>
						</ul>
					</div>
					<div class="columna columna-25 columna-mobile-100">
						<h3>
							Datos de contcto
						</h3>
						<ul>
							<li>luis.rocca96@gmail.com</li>
							<li>3197110718</li>
							<li>Av. universitaria 2345 - Pueblo Libre<br>Lima - Perú</li>
						</ul>
					</div>
					<div class="columna columna-25 columna-mobile-100">
						<h3>
							Redes Sociales
						</h3>
						<ul class="redes">
							<li>
								<a href="#">
									<i class="fab fa-facebook-square"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fab fa-twitter-square"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fab fa-instagram-square"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="barra-footer">
				&copy; Derechos Reservados - 2020
			</div>
		</footer>
		<script src="js/jquery.js"></script>
		<script src="js/funciones.js"></script>

	</body>
</html>