package io.jenkins.plugins.consolenavigation;

import hudson.Extension;
import hudson.console.ConsoleAnnotator;
import hudson.console.ConsoleAnnotatorFactory;

/**
 * @author Stefan Welsch<stefan.welsch@b-nova.com>
 */
@Extension
public class ConsoleNavigationAnnotatorFactory extends ConsoleAnnotatorFactory {

	@Override
	public ConsoleAnnotator newInstance(Object context) {
		return new ConsoleNavigationAnnotator();
	}


}
