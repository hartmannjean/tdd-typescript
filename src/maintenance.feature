Feature: Módulo de manutenção
    Scenario: Técnico de manutenção deseja agendar uma manutenção preventiva
        Given that I'm a maintenance technician
        When I schedule a new maintenance
        Then the system confirms that its scheduled